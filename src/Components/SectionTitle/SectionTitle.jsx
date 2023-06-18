import React from "react";

const SectionTitle = ({title,pera}) => {
  return (

      <div className="text-center my-6">
        <h2 className="text-2xl md:text-4xl mb-3 font-bold">{title}</h2>
        <p>{pera}</p>
      </div>
  
  );
};

export default SectionTitle;
