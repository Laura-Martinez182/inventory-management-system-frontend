import PageTemplate from "../../components/PageTemplate";
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';

export default function NewProduct() {
  return (
    <PageTemplate>
      <h1 className="text-4xl	font-bold text-left m-5">Nuevo producto</h1>
      <form className="p-10">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
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
                  className="block w-full rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-3">
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
          <div className="sm:col-span-3">
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
          <div className="sm:col-span-3">
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
          <div className="sm:col-span-3">
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
          <div className="sm:col-span-3">
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


          <div className="col-span-full">
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                <FileUploadRoundedIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Puede arrastrar y soltar archivos aquí para añadirlos</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG o JPG</p>
                </div>
              </div>
            </div>


        </div>
      </form>
    </PageTemplate>
  );
}
