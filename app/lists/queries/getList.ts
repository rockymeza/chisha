import db, { FindOneListArgs } from "db"

type GetListInput = {
  where: FindOneListArgs["where"]
  include?: FindOneListArgs["include"]
}

export default async function getList(
  { where, include }: GetListInput,
  ctx: Record<any, any> = {}
) {
  const list = await db.list.findOne({ where, include })

  return list
}
