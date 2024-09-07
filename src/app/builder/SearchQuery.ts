import { FilterQuery, Query } from "mongoose";

export class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    (this.modelQuery = modelQuery), (this.query = query);
  }

  search(productSearchableField: string[]) {
    const searchTerm = this.query?.searchTerm;
    const category = this.query?.category;

    const priceRange = this.query?.priceRange;

    let searchCriteria: FilterQuery<T> = {};

    if (searchTerm) {
      searchCriteria = {
        $or: productSearchableField.map(
          (field) =>
            ({
              [field]: { $regex: searchTerm, $options: "i" },
            } as FilterQuery<T>)
        ),
      };
    }

    if (category) {
      searchCriteria = {
        ...searchCriteria,
        category: { $regex: category, $options: "i" },
      };
    }

    if (priceRange) {
      const [min, max] = (priceRange as string).split("-").map(Number);
      searchCriteria = {
        ...searchCriteria,
        price: { $gte: min, $lte: max },
      };
    }

    this.modelQuery = this.modelQuery.find(searchCriteria);

    return this;
  }

  filter() {
    const queryObj = { ...this.query };

    const excludes = [
      "searchTerm",
      "sort",
      "limit",
      "page",
      "category",
      "priceRange",
    ];

    excludes.forEach((el) => delete queryObj[el]);

    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }

  paginate() {
    const limit = Number(this?.query?.limit) || 8;
    const page = Number(this?.query?.page) || 1;
    const skip = (page - 1) * limit;

    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }

  sort() {
    const sort =
      (this.query.sort as string)?.split(",").join(" ") || "-createdAt";
    this.modelQuery = this.modelQuery.sort(sort as string);
    return this;
  }
}
