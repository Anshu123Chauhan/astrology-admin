import React from "react";
import {
  FaUserCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBox,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaCreditCard,
  FaRupeeSign,
  FaRegStickyNote,
} from "react-icons/fa";
import Layout from "../components/layout";

const CustomerDetails = () => {
  const customer = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 98765 43210",
    address: "123 Main Street, New Delhi, India",
    joinedDate: "12 Oct 2025",
    status: "Active",
    totalOrders: 15,
    pendingOrders: 2,
    completedOrders: 12,
    cancelledOrders: 1,
    walletBalance: "₹3,250.00",
    preferredPayment: "Credit Card",
    gstNumber: "29ABCDE1234F2Z5",
    notes:
      "Customer prefers express delivery. Repeat buyer, good payment history.",
  };

  const orderHistory = [
    {
      id: "ORD12345",
      date: "10 Oct 2025",
      status: "Completed",
      amount: "₹850",
      images: [
        "https://res.cloudinary.com/dv5del8nh/image/upload/v1759212796/zrl1tcyhdm730k89h3wc.jpg",
        "https://res.cloudinary.com/dv5del8nh/image/upload/v1760333299/dtqjtkbdhwrp6bg8py1r.jpg",
      ],
    },
    {
      id: "ORD12346",
      date: "08 Oct 2025",
      status: "Pending",
      amount: "₹500",
      images: [
        "https://res.cloudinary.com/dv5del8nh/image/upload/v1759212796/zrl1tcyhdm730k89h3wc.jpg",
        "https://res.cloudinary.com/dv5del8nh/image/upload/v1760333299/dtqjtkbdhwrp6bg8py1r.jpg",
      ],
    },
    {
      id: "ORD12347",
      date: "05 Oct 2025",
      status: "Cancelled",
      amount: "₹1,200",
      images: [
        "https://res.cloudinary.com/dv5del8nh/image/upload/v1759212796/zrl1tcyhdm730k89h3wc.jpg",
        "https://res.cloudinary.com/dv5del8nh/image/upload/v1760333299/dtqjtkbdhwrp6bg8py1r.jpg",
      ],
    },
    {
      id: "ORD12348",
      date: "02 Oct 2025",
      status: "Completed",
      amount: "₹650",
      images: [
        "https://res.cloudinary.com/dv5del8nh/image/upload/v1759212796/zrl1tcyhdm730k89h3wc.jpg",
      ],
    },
    {
      id: "ORD12349",
      date: "28 Sep 2025",
      status: "Completed",
      amount: "₹2,000",
      images: [
        "https://res.cloudinary.com/dv5del8nh/image/upload/v1759212796/zrl1tcyhdm730k89h3wc.jpg",
        "https://res.cloudinary.com/dv5del8nh/image/upload/v1760333299/dtqjtkbdhwrp6bg8py1r.jpg",
      ],
    },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-600 bg-green-100";
      case "Pending":
        return "text-yellow-600 bg-yellow-100";
      case "Cancelled":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 px-4 py-8 flex flex-col items-center">
        {/* Header */}
        <div className="w-full max-w-6xl text-center mb-8 transition-all">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Customer Details
          </h1>
          <p className="text-gray-500 mt-1">
            Detailed customer profile & order information
          </p>
        </div>

        {/* Customer Card */}
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 mb-6 transition hover:shadow-xl hover:scale-[1.01]">
          <div className="text-7xl text-gray-400">
            <FaUserCircle />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">
              {customer.name}
            </h2>
            <p className="text-gray-500">{customer.email}</p>
            <p className="text-xs text-gray-500">
              Joined: {customer.joinedDate}
            </p>
            <span
              className={`inline-block mt-2 px-3 py-1 text-sm rounded-full transition ${
                customer.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {customer.status}
            </span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 transition hover:shadow-xl hover:scale-[1.01]">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-full text-blue-600">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium text-gray-800">{customer.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-full text-blue-600">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-800">{customer.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:col-span-2 lg:col-span-1">
            <div className="p-3 bg-blue-50 rounded-full text-blue-600">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-medium text-gray-800">{customer.address}</p>
            </div>
          </div>
        </div>

        {/* Order Summary Cards */}
        <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 hover:shadow-xl hover:scale-[1.01]">
            <FaBox className="text-blue-600 text-2xl" />
            <div>
              <p className="text-gray-500 text-sm">Total Orders</p>
              <p className="text-lg font-semibold">{customer.totalOrders}</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 transition hover:shadow-xl hover:scale-[1.01]">
            <FaClock className="text-yellow-600 text-2xl" />
            <div>
              <p className="text-gray-500 text-sm">Pending</p>
              <p className="text-lg font-semibold">{customer.pendingOrders}</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 transition hover:shadow-xl hover:scale-[1.01]">
            <FaCheckCircle className="text-green-600 text-2xl" />
            <div>
              <p className="text-gray-500 text-sm">Completed</p>
              <p className="text-lg font-semibold">
                {customer.completedOrders}
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 transition hover:shadow-xl hover:scale-[1.01]">
            <FaTimesCircle className="text-red-600 text-2xl" />
            <div>
              <p className="text-gray-500 text-sm">Cancelled</p>
              <p className="text-lg font-semibold">
                {customer.cancelledOrders}
              </p>
            </div>
          </div>
        </div>

        {/* Wallet / Payment / Account Details */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Wallet */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <FaCreditCard className="text-blue-600 text-2xl" />
              <div>
                <p className="text-gray-500 text-sm">Wallet Balance</p>
                <p className="text-xl font-semibold">
                  {customer.walletBalance}
                </p>
              </div>
            </div>
            <button className="w-full mt-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Add Funds
            </button>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <FaRupeeSign className="text-green-600 text-2xl" />
              <div>
                <p className="text-gray-500 text-sm">Preferred Payment</p>
                <p className="text-lg font-semibold">
                  {customer.preferredPayment}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              GST No: {customer.gstNumber}
            </p>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <FaRegStickyNote className="text-yellow-600 text-2xl" />
              <div>
                <p className="text-gray-500 text-sm">Customer Notes</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {customer.notes}
            </p>
          </div>
        </div>

        {/* Order History Table */}
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-6 overflow-x-auto hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-4">Order History</h3>
          <table className="w-full min-w-[650px] text-left border-collapse">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-2 px-3">Order ID</th>
                <th className="py-2 px-3">Photos</th>
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((order) => (
                <tr
                  key={order.id}
                  className="border-b last:border-0 hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-3 font-medium">{order.id}</td>
                  <td className="py-2 px-3">
                    <div className="flex gap-2 flex-wrap">
                      {order.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Order ${order.id} Product ${idx + 1}`}
                          className="w-20 h-20 rounded-md object-cover border transition transform hover:scale-150 hover:shadow-lg"
                        />
                      ))}
                    </div>
                  </td>
                  <td className="py-2 px-3">{order.date}</td>
                  <td className="py-2 px-3">
                    <span
                      className={`px-2 py-1 text-sm rounded-full ${statusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-2 px-3 font-semibold">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerDetails;
