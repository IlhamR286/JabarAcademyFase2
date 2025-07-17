import { products, findProductIndex } from '@/app/data/products';

export async function DELETE(req, context) {
  const { params } = context;
  const id = params.id;

  const index = findProductIndex(id);
  if (index === -1) {
    return Response.json({ error: 'Not found' }, { status: 404 });
  }

  const deleted = products.splice(index, 1)[0];
  return Response.json(deleted);
}
