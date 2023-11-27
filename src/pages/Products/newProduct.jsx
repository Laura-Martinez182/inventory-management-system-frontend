import AddImageInput from "../../components/AddImageInput";
import PageTemplate from "../../components/PageTemplate";
import Divider from "@mui/material/Divider";

export default function NewProduct() {
  return (
    <PageTemplate>
      <div className=" bg-white rounded shadow-md text-slate-800 shadow-slate-200 mb-10">
        <form className="p-6">
          <h1 className="text-3xl	font-bold text-left m-5">Nuevo producto</h1>
          <Divider />
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 p-10">
            <div className="col-span-4 lg:col-span-6">
              <label className="block text-xl font-bold text-gray-900">
                Nombre
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                  <input
                    type="text"
                    name="product-name"
                    id="product-name"
                    autoComplete="product-name"
                    className="block w-full rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-4 lg:col-span-6">
              <label className="text-xl font-bold text-gray-900">Código</label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                  <input
                    type="text"
                    name="product-code"
                    id="product-code"
                    autoComplete="product-name"
                    className="block w-full rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-4 lg:col-span-6">
              <label className="block text-xl font-bold text-gray-900">
                Categoría
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                  <input
                    type="text"
                    name="product-category"
                    id="product-category"
                    autoComplete="product-category"
                    className="block w-full rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-6">
              <label className="block text-xl font-bold text-gray-900">
                Marca
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                  <input
                    type="text"
                    name="product-brand"
                    id="product-brand"
                    autoComplete="product-brand"
                    className="block w-full rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-6">
              <label className="block text-xl font-bold text-gray-900">
                Dimensiones
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                  <input
                    type="text"
                    name="product-dimensions"
                    id="product-dimensions"
                    autoComplete="product-dimensions"
                    className="block w-full rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-4 lg:col-span-6">
              <label className="block text-xl font-bold text-gray-900">
                Descripción
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                  <input
                    type="text"
                    name="product-description"
                    id="product-description"
                    autoComplete="product-description"
                    className="block w-full rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-4 lg:col-span-6">
              <label className="block text-xl font-bold text-gray-900">
                Unidades
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                  <input
                    type="number"
                    min="1"
                    name="product-units"
                    id="product-units"
                    autoComplete="product-units"
                    className="block w-full rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-4 lg:col-span-6">
              <label className="block text-xl font-bold text-gray-900">
                Costo
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                  <input
                    type="number"
                    name="product-cost"
                    min="1"
                    id="product-cost"
                    autoComplete="product-cost"
                    className="block w-full rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-4 lg:col-span-6">
              <label className="block text-xl font-bold text-gray-900">
                Precio de venta
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                  <input
                    type="number"
                    min="1"
                    name="product-price"
                    id="product-price"
                    autoComplete="product-price"
                    className="block w-full rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <AddImageInput />
          </div>
        </form>
      </div>
    </PageTemplate>
  );
}
