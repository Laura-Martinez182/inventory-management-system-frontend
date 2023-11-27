import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

export default function AddImageInput() {
    return (
        <div className="col-span-4 lg:col-span-6">
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <FileUploadRoundedIcon
              className="mx-auto h-12 w-10 text-gray-300"
              aria-hidden="true"
            />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                className="relative cursor-pointer rounded-md bg-white font-semibold text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-emerald-600 focus-within:ring-offset-2 hover:emerald-600"
              >
                <span>
                  Puede arrastrar y soltar archivos aquí para añadirlos
                </span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG o JPG</p>
          </div>
        </div>
      </div>
    )
}