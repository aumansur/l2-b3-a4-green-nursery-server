import { FilterQuery, Query } from "mongoose";

export class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    (this.modelQuery = modelQuery), (this.query = query);
  }

  search(productSearchableField: string[]) {
    const searchTerm = this.query?.searchTerm;
    console.log("mal", searchTerm);

    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: productSearchableField.map(
          (field) =>
            ({
              [field]: { $regex: searchTerm, $options: "i" },
            } as FilterQuery<T>)
        ),
      });
    }
    return this;
  }

  filter() {
    const queryObj = { ...this.query };

    const excludes = ["searchTerm", "sort", "limit", "page"];

    excludes.forEach((el) => delete queryObj[el]);

    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }

  paginate() {
    const limit = Number(this?.query?.limit) || 5;
    const page = Number(this?.query?.page) || 1;
    const skip = (page - 1) * limit;

    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }
}
