import { RootState } from 'Redux/types';
import { getProductsAction, addToCart } from 'Redux/products';
import { connect } from 'react-redux';
import { selectAllProducts } from 'Redux/products/selectors';

const mapStateToProps = (state: RootState) => ({
  products: selectAllProducts(state),
});

const mapDispatchToProps = {
  fetchProducts: getProductsAction.request,
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps);

export type ConnectedProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;
