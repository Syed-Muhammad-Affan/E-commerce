import { useApp } from "@/useContext/useApp";
import { Search } from "lucide-react";
// import { useProductFilter } from "./useProductFilter";
import { useProductFilterContext } from "./ProductsFilterContext";
import { Container } from "@/Custom Div/Container";

export function FilterProduct() {
  const { darkMode } = useApp();

  const { tempFilter, handleFilter, handleReset, setTempFilter, allProducts } =
    useProductFilterContext();

  const category = [...new Set(allProducts?.map((item) => item.category))];

  if (!allProducts) return <div>Loading filters...</div>;

  return (
    <section>
      <Container className={`pt-24 `}>
        <div
          className={`p-5 flex w-full rounded-lg ${darkMode ? "bg-DSurface shadow-[0px_0px_10px_0px_rgba(255,255,255,0.25)]" : "bg-LSurface shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"}`}
        >
          <form onSubmit={handleFilter} className="w-full flex gap-5">
            <div className="flex flex-col gap-2.5 w-3/4">
              <div
                className={`bg-white flex gap-2.5 rounded-lg px-2.5 py-1 items-center w-full ${darkMode ? "shadow-[0px_0px_10px_0px_rgba(250,250,250,0.25)]" : "shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"}`}
              >
                <Search size={18} />
                <input
                  type="text"
                  className={`outline-none text-lg w-full`}
                  value={tempFilter.title}
                  onChange={(e) =>
                    setTempFilter({ ...tempFilter, title: e.target.value })
                  }
                />
              </div>
              <div className="flex gap-2.5 justify-between">
                <div className="flex flex-col gap-2.5 w-[31%]">
                  <div
                    className={`flex justify-between ${darkMode ? "text-DText" : "text-LText"}`}
                  >
                    <span>Select Price:</span>
                    <span>Rs.{tempFilter.price}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1100"
                    value={tempFilter.price}
                    onChange={(e) =>
                      setTempFilter({
                        ...tempFilter,
                        price: Number(e.target.value),
                      })
                    }
                    className="cursor-pointer range"
                  />
                  <div
                    className={`flex justify-between ${darkMode ? "text-DText" : "text-LText"}`}
                  >
                    <span>Min: Rs.0</span>
                    <span>Max: Rs.1100</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 w-[31%]">
                  <span className={`${darkMode ? "text-DText" : "text-LText"}`}>
                    Sorted By:
                  </span>
                  <select
                    value={tempFilter.sort}
                    onChange={(e) =>
                      setTempFilter({ ...tempFilter, sort: e.target.value })
                    }
                    className={`rounded-lg px-2 py-1 outline-none cursor-pointer ${darkMode ? "bg-LBackground text-LText" : "bg-DBackground text-DText"}`}
                  >
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2.5 w-[31%]">
                  <span className={`${darkMode ? "text-DText" : "text-LText"}`}>
                    Category:
                  </span>
                  <select
                    value={tempFilter.category}
                    onChange={(e) =>
                      setTempFilter({ ...tempFilter, category: e.target.value })
                    }
                    className={`rounded-lg px-2 py-1 outline-none cursor-pointer ${darkMode ? "bg-LBackground text-LText" : "bg-DBackground text-DText"}`}
                  >
                    <option value="default">Select Category</option>
                    {category?.map((cat) => {
                      return (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 w-[23%] justify-center items-center">
              <button
                type="submit"
                className="w-full bg-DSecondary py-1 text-lg rounded-lg cursor-pointer text-DText hover:bg-DHighlight"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="w-full bg-DPrimary py-1 text-lg text-DText rounded-lg cursor-pointer hover:bg-DHighlight"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
