import { useState } from "react";
import { createProduct, deleteProduct } from "../services/api";
import { useProducts } from "../context/ProductContext";
import "./AdminProduct.css";

const initialForm = { name: "", price: "", description: "", category: "", gender: "her", stock: "0" };

function AdminProduct() {
  const [form, setForm] = useState(initialForm);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { products, loading, refreshProducts } = useProducts();

  const changeField = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const categories = form.gender === "her"
    ? ["Dresses", "Shoes", "Bags", "Perfume", "Accessories"]
    : ["Clothing", "Sneakers", "Watches", "Grooming", "Accessories"];
  const selectImage = (event) => { const file = event.target.files?.[0] || null; setImage(file); setPreview(file ? URL.createObjectURL(file) : ""); };
  const submit = async (event) => {
    event.preventDefault(); if (!image) return setMessage("Şəkil seçin.");
    const formData = new FormData(); Object.entries(form).forEach(([key, value]) => formData.append(key, value)); formData.append("image", image);
    try { setSubmitting(true); setMessage(""); await createProduct(formData, localStorage.getItem("token")); await refreshProducts(); setForm(initialForm); setImage(null); setPreview(""); event.target.reset(); setMessage("Məhsul uğurla əlavə edildi."); }
    catch (error) { setMessage(error.message); } finally { setSubmitting(false); }
  };
  const remove = async (id) => { if (!window.confirm("Bu məhsulu silmək istəyirsiniz?")) return; try { await deleteProduct(id, localStorage.getItem("token")); await refreshProducts(); } catch (error) { setMessage(error.message); } };

  return <main className="admin-page">
    <header className="admin-heading"><div><p className="admin-eyebrow">SHOPZONE ADMIN</p><h1>Məhsul idarəetməsi</h1><p>Yeni məhsul və şəklini birbaşa kataloqa əlavə edin.</p></div><div className="admin-count"><strong>{products.length}</strong><span>məhsul</span></div></header>
    <section className="admin-layout"><form className="admin-form" onSubmit={submit}><h2>Yeni məhsul</h2><div className="admin-fields">
      <label>Ad<input required name="name" value={form.name} onChange={changeField} /></label><label>Qiymət<input required name="price" type="number" min="0" step="0.01" value={form.price} onChange={changeField} /></label>
      <label>Kateqoriya<select required name="category" value={form.category} onChange={changeField}><option value="" disabled>Kateqoriya seçin</option>{categories.map((category) => <option key={category} value={category}>{category}</option>)}</select></label><label>Stok<input name="stock" type="number" min="0" value={form.stock} onChange={changeField} /></label>
      <label>Cins<select name="gender" value={form.gender} onChange={(event) => setForm({ ...form, gender: event.target.value, category: "" })}><option value="her">Qadın</option><option value="him">Kişi</option></select></label><label className="admin-description">Açıqlama<textarea required name="description" value={form.description} onChange={changeField} /></label>
    </div><label className="upload-area">{preview ? <img src={preview} alt="Seçilmiş məhsul şəkli" /> : <span>Şəkil seçmək üçün klikləyin<br /><small>JPG, PNG, WebP · maksimum 5 MB</small></span>}<input required type="file" accept="image/png,image/jpeg,image/webp" onChange={selectImage} /></label><button className="admin-submit" disabled={submitting}>{submitting ? "Yüklənir..." : "Məhsulu əlavə et"}</button>{message && <p className="admin-message" role="status">{message}</p>}</form>
      <section className="admin-products"><div className="admin-list-title"><h2>Mövcud məhsullar</h2><span>{loading ? "Yüklənir..." : `${products.length} ədəd`}</span></div><div className="admin-list">{products.map((product) => <article key={product.id} className="admin-product-card"><img src={product.image} alt={product.name} /><div><strong>{product.name}</strong><span>{product.gender === "her" ? "Qadın" : "Kişi"} · {product.category}</span><b>${product.price}</b></div><button onClick={() => remove(product.id)}>Sil</button></article>)}{!loading && !products.length && <p>Hələ məhsul yoxdur.</p>}</div></section>
    </section></main>;
}
export default AdminProduct;
