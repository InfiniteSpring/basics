import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        try {
            if (!newProduct.name || !newProduct.price || !newProduct.image) {
                return { success: false, message: "Please fill all fields." };
            }
            const response = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            });
            if (!response.ok) {
                return { success: false, message: `Error ${response.status}: ${response.statusText}` };
            }
            const data = await response.json();
            if (!data.success) {
                return { success: false, message: data.message || "Product creation failed." };
            }
            set((state) => ({ products: [...state.products, data.data] }));
            return { success: true, message: data.message };
        } catch (error) {
            return { success: false, message: error.message || "Network error" };
        }
    },
    
    readProducts: async () => {
        try {
            const response = await fetch("/api/products");
            if (!response.ok) {
                return { success: false, message: `Error ${response.status}: ${response.statusText}` };
            }
            const data = await response.json();
            if (!data.success) {
                return { success: false, message: data.message || "Failed to fetch products." };
            }
            set({ products: data.data });
        } catch (error) {
            return { success: false, message: error.message || "Network error" };
        }
    },

    updateProduct: async (productId, productUpdated) => {
        try {
            const response = await fetch(`/api/products/${productId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productUpdated)
            });
            if (!response.ok) {
                return { success: false, message: `Ошибка ${response.status}: ${response.statusText}` };
            }
            const data = await response.json();
            if (!data.success) {
                return { success: false, message: data.message || "Ошибка обновления" };
            }
            set((state) => ({
                products: state.products.map((product) =>
                    product._id === productId ? { ...product, ...productUpdated } : product
                )
            }));
            return { success: true, message: data.message || "Продукт обновлен" };
        } catch (error) {
            return { success: false, message: error.message || "Ошибка сети" };
        }
    },
    
    deleteProduct: async (productId) => {
        try {
            const response = await fetch(`/api/products/${productId}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                return { success: false, message: `Ошибка ${response.status}: ${response.statusText}` };
            }
            const data = await response.json();
            if (!data.success) {
                return { success: false, message: data.message || "Ошибка удаления" };
            }
            set((state) => ({
                products: state.products.filter((product) => product._id !== productId)
            }));
            return { success: true, message: data.message || "Продукт удален" };
        } catch (error) {
            return { success: false, message: error.message || "Ошибка сети" };
        }
    }
}));

