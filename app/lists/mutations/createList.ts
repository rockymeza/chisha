import db, { ListCreateArgs } from "db"

type CreateListInput = {
  data: ListCreateArgs["data"]
}
export default async function createList({ data }: CreateListInput, ctx: Record<any, any> = {}) {
  const list = await db.list.create({ data })

  return list
}
