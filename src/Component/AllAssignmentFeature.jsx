import { useState, useEffect } from "react";
import AssignmentCard from "../Component/AssignmentCard";

const AllAssignmentFeature = () => {
  const [assignments, setAssignments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(40); // Assuming there are 40 pages
  const [searchTerm, setSearchTerm] = useState("");
  const [brandName, setBrandName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    fetchAssignments();
  }, [currentPage, searchTerm, brandName, categoryName, priceRange, sortOrder]);

  const fetchAssignments = async () => {
    try {
      const response = await fetch('https://online-study-server-delta.vercel.app/all-list');
      if (!response.ok) {
        throw new Error('Failed to fetch assignments');
      }
      let data = await response.json();

      // Filter assignments based on search and filter criteria
      if (searchTerm) {
        data = data.filter(assignment =>
          assignment.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      if (brandName) {
        data = data.filter(assignment =>
          assignment.brandName.toLowerCase().includes(brandName.toLowerCase())
        );
      }
      if (categoryName) {
        data = data.filter(assignment =>
          assignment.categoryName.toLowerCase().includes(categoryName.toLowerCase())
        );
      }
      if (priceRange) {
        const [minPrice, maxPrice] = priceRange.split('-').map(Number);
        data = data.filter(assignment => {
          const price = Number(assignment.price);
          return price >= minPrice && price <= maxPrice;
        });
      }

      // Sort assignments
      if (sortOrder === "low-to-high") {
        data.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "high-to-low") {
        data.sort((a, b) => b.price - a.price);
      } else if (sortOrder === "newest") {
        data.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
      }

      // Pagination
      const itemsPerPage = 5;
      const startIndex = (currentPage - 1) * itemsPerPage;
      const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

      setAssignments(paginatedData);

      // Update total pages based on the filtered data
      const totalItems = data.length;
      setTotalPages(Math.ceil(totalItems / itemsPerPage));

    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      if (direction === "next") {
        return Math.min(prevPage + 1, totalPages);
      } else if (direction === "prev") {
        return Math.max(prevPage - 1, 1);
      }
    });
  };

  return (
    <div className="p-4 md:p-8">
      <div className="mb-6">
        <h1 className="text-center text-4xl font-bold text-blue-600 mb-4">All Items</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Brand Name"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Price Range (e.g., 10-50)"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="newest">Date Added: Newest First</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
        {assignments.length > 0 ? (
          assignments.map((assignment) => (
            <AssignmentCard key={assignment._id} assignment={assignment} />
          ))
        ) : (
          <p className="text-center">No assignments found.</p>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
          className="p-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <p className="text-center">{`Page ${currentPage} of ${totalPages}`}</p>
        <button
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
          className="p-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllAssignmentFeature;
