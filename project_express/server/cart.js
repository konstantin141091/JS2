const add = (cart, req) => {
  cart.contents.push(req.body);
  return JSON.stringify(cart, null, 4);
};
const change = (cart, req) => {
  // console.log(req.body.value);
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  if (req.body.value === 'add') {
    find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
  } else {
    find.quantity -= req.body.quantity;
    return JSON.stringify(cart, null, 4);
  }
};
const remove = (cart, req) => {
    cart.contents.splice(cart.contents.indexOf(req.body), 1);
    return JSON.stringify(cart, null, 4);
};

module.exports = {
  add,
  change,
  remove,
};
