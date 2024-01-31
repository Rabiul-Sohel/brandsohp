import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
  const product = useLoaderData()
  const { _id, brand, model, price, rating, description, category, photo } = product
  const navigate = useNavigate()
  
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const model = form.model.value;
    const price = form.price.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const product = {
      brand,
      model,
      price,
      category,
      rating,
      photo,
      description,
    };
   
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "You updated a product",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
          
      });
    form.reset();
    navigate(`/brand/${brand}`);
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-6">Update Product</h2>
      <form onSubmit={handleUpdateProduct} className="grid grid-cols-2 gap-5 mb-5">
        {/* field One */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <input
            type="text"
            defaultValue={brand}
            name="brand"
            placeholder="brand"
            className="input input-bordered"
          />
        </div>
        {/* field two */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Model</span>
          </label>
          <input
            type="text"
            name="model"
            defaultValue={model}
            placeholder="Model"
            className="input input-bordered"
          />
        </div>
        {/* field three */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="price"
            defaultValue={price}
            className="input input-bordered"
          />
        </div>
        {/* field four*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            name="category"
            defaultValue={category}
            placeholder="Category"
            className="input input-bordered"
          />
        </div>
        {/* field five */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="text"
            name="rating"
            defaultValue={rating}
            placeholder="Rating"
            className="input input-bordered"
          />
        </div>
        {/* field six */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            defaultValue={photo}
            placeholder="Photo URL"
            className="input input-bordered"
          />
        </div>
        {/* field seven */}
        <div className="form-control col-span-2">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea
            type="text"
            name="description"
            defaultValue={description}
            placeholder="Short Description here"
            className="input input-bordered"
          />
        </div>
        <div className="w-full col-span-2 flex justify-center">
          <input type="submit" className="btn btn-primary" value="Update" />
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;