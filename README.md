# Koreevoke E-Commerce Website

A modern, fully-functional e-commerce platform built with React, Vite, and Tailwind CSS.

## 🎯 Features

- 🛍️ **Product Catalog**: Browse featured products with detailed information
- 🛒 **Shopping Cart**: Add/remove items, adjust quantities with real-time updates
- 💳 **Complete Checkout Flow**: Shipping address and payment forms
- 📱 **Responsive Design**: Mobile-friendly interface that works on all devices
- ⭐ **Product Reviews**: View customer ratings and reviews
- 🎨 **Modern UI**: Clean and professional design using Tailwind CSS
- ⚡ **Fast Performance**: Built with Vite for optimal speed

## 🛠 Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router v6
- **HTTP Client**: Axios

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/krishnaprakashrekapalli/https-koreevoke.lovable.app-
cd https-koreevoke.lovable.app-
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with cart badge
│   ├── Footer.jsx          # Footer with links
│   └── ProductCard.jsx     # Reusable product card component
├── pages/
│   ├── HomePage.jsx        # Landing page with featured products
│   ├── ProductPage.jsx     # Product detail page
│   ├── CartPage.jsx        # Shopping cart page
│   └── CheckoutPage.jsx    # Checkout & order confirmation
├── store/
│   └── cartStore.js        # Zustand cart state management
├── App.jsx                 # Main application component
├── main.jsx                # React DOM entry point
└── index.css               # Global styles
```

## 📜 Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎯 Features Overview

### Home Page
- Hero section with call-to-action button
- Featured products grid (6 products)
- Benefits section highlighting company strengths
- Fully responsive layout

### Product Page
- Detailed product information
- Product specifications table
- Customer reviews section
- Quantity selector
- Add to cart functionality
- Wishlist button (UI only)

### Shopping Cart
- View all cart items in table format
- Adjust quantities for each item
- Remove individual items
- Clear entire cart
- Real-time price calculations
- Shipping cost estimation
- Tax calculation

### Checkout
- Shipping address form collection
- Payment information form (card details)
- Order summary panel
- Order confirmation page with order ID
- Success messaging

## 🔄 State Management

The app uses **Zustand** for cart state with the following actions:

```javascript
// Add product to cart
addToCart(product)

// Remove product from cart
removeFromCart(productId)

// Update product quantity
updateQuantity(productId, quantity)

// Clear all items
clearCart()
```

## 🎨 Styling & Customization

The project uses **Tailwind CSS** for styling with custom configuration:

- **Primary Color**: `#1a1a1a` (Dark)
- **Secondary Color**: `#6366f1` (Indigo)
- **Accent Color**: `#ec4899` (Pink)

All components use utility-first CSS approach for easy customization.

## 💡 Future Enhancements

- [ ] User authentication system
- [ ] Product filtering and search
- [ ] Wishlist functionality with persistence
- [ ] Order tracking system
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Admin dashboard
- [ ] Product inventory management
- [ ] User reviews submission
- [ ] Email notifications
- [ ] Social media sharing

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Support

For issues, feature requests, or contributions, please create an issue or pull request on GitHub.

---

Built with ❤️ for seamless e-commerce experiences.
