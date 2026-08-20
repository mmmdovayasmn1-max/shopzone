const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const BACKEND_URL = API_URL.replace(/\/api\/?$/, "");

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) throw new Error("Məhsulları yükləmək mümkün olmadı");
  const products = await response.json();
  return products.map((product) => ({
    ...product,
    id: product._id,
    image: product.image?.startsWith("http")
      ? product.image
      : `${BACKEND_URL}${product.image}`,
  }));
}

export async function createProduct(formData, token) {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: formData,
  });
  const body = await response.json();
  if (!response.ok) throw new Error(body.message || "Məhsul yaradıla bilmədi");
  return body;
}

export async function deleteProduct(id, token) {
  const response = await fetch(`${API_URL}/products/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
  const body = await response.json();
  if (!response.ok) throw new Error(body.message || "Məhsul silinə bilmədi");
  return body;
}
