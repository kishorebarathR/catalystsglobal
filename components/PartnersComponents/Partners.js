import { corporatePartners } from "@/app/utils/partners-data";
import React from "react";

const PartnersRow = () => {
  return (
    <div className="bg-white py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Partners</h2>
      <p className="text-center text-gray-600 mb-8">
        We work with organizations at the local, national, regional, and global levels. Our partners play a huge part in supporting the work we do, helping us deliver to those who need it the most.
      </p>
      <h2 className="lg:px-16 text-xl font-semibold">Corporates</h2>
      <div className="bg-white py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-8 md:px-16">
          {corporatePartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center border  p-4 hover:shadow-lg"
            >
              <img
                src={partner.img}
                alt={`Corporate Partner ${index + 1}`}
                className="max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersRow;
