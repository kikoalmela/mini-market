import { connect } from 'react-redux';
import { removeFromCart } from 'Redux/products';
import { selectCartProducts } from 'Redux/products/selectors';
import { RootState } from 'Redux/types';

const mapStateToProps = (state: RootState) => ({
  cartProducts: selectCartProducts(state),
});

const mapDispatchToProps = {
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps);

export type ConnectedProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;
