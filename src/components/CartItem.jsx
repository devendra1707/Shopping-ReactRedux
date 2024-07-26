import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import toast from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeToCart = () => {
    dispatch.remove(item.id);
    toast("delete Successfully");
  };

  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
        </div>
        <div>
          <p>{item.price}</p>
        </div>
        <div>
          <p>
            <FcDeleteDatabase />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
