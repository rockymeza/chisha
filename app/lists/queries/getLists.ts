import db, { FindManyListArgs } from "db"

type GetListsInput = {
  where?: FindManyListArgs["where"]
  orderBy?: FindManyListArgs["orderBy"]
  cursor?: FindManyListArgs["cursor"]
  take?: FindManyListArgs["take"]
  skip?: FindManyListArgs["skip"]
  // Only available if a model relationship exists
  // include?: FindManyListArgs['include']
}

export default async function getLists(
  { where, orderBy, cursor, take, skip }: GetListsInput,
  ctx: Record<any, any> = {}
) {
  const lists = await db.list.findMany({
    where,
    orderBy,
    cursor,
    take,
    skip,
  })

  return lists
}
