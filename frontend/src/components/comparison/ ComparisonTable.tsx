import { Product } from "@/types/product";
import Link from "next/link";

type Props = {
  products: Product[];
};

export default function ComparisonTable({ products }: Props) {
  return (
    <div className="my-16 overflow-x-auto">

      <table className="w-full text-left border-collapse">

        <thead>
          <tr
            className="text-sm"
            style={{ borderBottom: "1px solid rgb(var(--color-border))" }}
          >
            <th className="py-4">Product</th>
            <th>Rating</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.name}
              style={{
                borderBottom: "1px solid rgb(var(--color-border))",
              }}
              className="hover:bg-[rgb(var(--color-surface))] transition"
            >
              <td className="py-6">
                <div className="flex flex-col">
                  <span className="font-medium">
                    {product.name}
                    {product.topPick && (
                      <span className="ml-2 text-xs px-2 py-1 rounded bg-black text-white dark:bg-white dark:text-black">
                        Top Pick
                      </span>
                    )}
                  </span>
                  <span
                    className="text-sm mt-1"
                    style={{
                      color: "rgb(var(--color-text-muted))",
                    }}
                  >
                    {product.description}
                  </span>
                </div>
              </td>

              <td>{product.rating}/10</td>

              <td>{product.price || "-"}</td>

              <td>
                <Link
                  href={product.link}
                  className="px-4 py-2 text-sm rounded-md transition
                  bg-black text-white
                  dark:bg-white dark:text-black
                  hover:opacity-80"
                >
                  Visit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}