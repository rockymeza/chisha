import db, { ListDeleteArgs } from "db"

type DeleteListInput = {
  where: ListDeleteArgs["where"]
}

export default async function deleteList({ where }: DeleteListInput, ctx: Record<any, any> = {}) {
  const list = await db.list.delete({ where })

  return list
}
