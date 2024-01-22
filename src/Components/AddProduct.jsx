

const AddProduct = () => {

  const handleAddProduct = e => {
    e.preventDefault()
    const form = e.target;
    const brand = form.brand.value;
    const model = form.model.value;
    const price = form.price.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const product = {
      brand, model, price, category, rating, photo, description 
    }
    console.log(product);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-6">Add Product</h2>
      <form onSubmit={handleAddProduct} className="grid grid-cols-2 gap-5">
        {/* field One */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <input
            type="text"
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
            placeholder="Short Description here"
            className="input input-bordered"
          />
        </div>
        <div className="w-full col-span-2 flex justify-center">
          <input type="submit" className="btn" value="Add Product" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;