import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";
import displayINRCurrency from "../helpers/displayCurrency";
import SummaryApi from "../common";
import { useState } from "react";
import { toast } from "react-toastify";

const AdminProductCard = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);

  const handleDelete = async (id) => {
    try {
      console.log(JSON.stringify({ _id: id }));
      const response = await fetch(SummaryApi.deleteProduct.url, {
        method: SummaryApi.deleteProduct.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Product deleted successfully");
        fetchdata();
      } else {
        toast.error(`Failed to delete product: ${result.message}`);
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="bg-white p-4 rounded ">
      <div className="w-40">
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src={data?.productImage[0]}
            className="mx-auto object-fill h-full"
          />
        </div>
        <h1 className="text-ellipsis line-clamp-2">{data.productName}</h1>

        <div>
          <p className="font-semibold">
            {displayINRCurrency(data.sellingPrice)}
          </p>

          <div className="flex">
            <div
              className="w-fit ml-auto p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer"
              onClick={() => setEditProduct(true)}
            >
              <MdModeEditOutline />
            </div>
            <div
              className="w-fit ml-2 p-2 bg-red-100 hover:bg-red-600 rounded-full hover:text-white cursor-pointer"
              onClick={() => handleDelete(data._id || data.id)}
            >
              <MdDelete />
            </div>
          </div>
        </div>
      </div>

      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchdata={fetchdata}
        />
      )}
    </div>
  );
};

export default AdminProductCard;
