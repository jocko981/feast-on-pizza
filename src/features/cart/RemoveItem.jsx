import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { removeItem } from "./cartSlice";

function RemoveItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleRemoveItem() {
    dispatch(removeItem(pizzaId));
  }

  return (
    <Button type="small" onClick={handleRemoveItem}>
      Remove
    </Button>
  );
}

export default RemoveItem;
