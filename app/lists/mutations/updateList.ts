import db, { ListUpdateArgs } from "db"

type UpdateListInput = {
  where: ListUpdateArgs["where"]
  data: ListUpdateArgs["data"]
  include: ListUpdateArgs["include"]
}

export default async function updateList(
  { where, data, include }: UpdateListInput,
  ctx: Record<any, any> = {}
) {
  // Don't allow updating
  delete data.id

  const list = await db.list.update({ where, data, include })

  return list
}
