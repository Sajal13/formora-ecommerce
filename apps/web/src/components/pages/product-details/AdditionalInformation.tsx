import { ProductAdditionalInformation } from "@/types/products";
import { numberFormat } from "@/utils/helper";
import React from "react";

interface AdditionalInformationProps {
  item: ProductAdditionalInformation;
  category: string;
}
const AdditionalInformation = ({
  item,
  category
}: AdditionalInformationProps) => {
  return (
    <div className="flex justify-center items-center">
      <table className="table">
        <tbody className="">
          <tr>
            <td className="text-lg text-neutral-700 font-semibold min-w-54">
              Dimensions
            </td>
            <td>
              <p className="text-neutral-700 mb-2">
                Width: {numberFormat(item.dimensions.width)}(x Inch)
              </p>
              <p className="text-neutral-700">
                Height: {numberFormat(item.dimensions.height)}(x Inch)
              </p>
              {category.toLowerCase() === "beds" &&
                item.dimensions.mattressSize && (
                  <p className="text-neutral-700 mt-2">
                    Mattress Size: {numberFormat(item.dimensions.mattressSize)}
                    (x Inch)
                  </p>
                )}
            </td>
          </tr>
          <tr>
            <td className="text-lg text-neutral-700 font-semibold">Weight</td>
            <td>
              <p className="text-neutral-700 mb-2">
                Weight: {numberFormat(item.weight.productWight)}(x Kg)
              </p>
              <p className="text-neutral-700">
                Max Load: {numberFormat(item.weight.maxLoad)}(x Kg)
              </p>
            </td>
          </tr>
          {category.toLowerCase() === "sofa" && item.seatingCapacity && (
            <tr>
              <td className="text-lg text-neutral-700 font-semibold">
                Setting Capacity
              </td>
              <td>
                <p className="text-neutral-700 mb-2">
                  {numberFormat(item.seatingCapacity)} Persons
                </p>
              </td>
            </tr>
          )}
          {category.toLowerCase() === "almirah" && item.storageAvailability && (
            <tr>
              <td className="text-lg text-neutral-700 font-semibold">
                Storage Availability
              </td>
              <td>
                <p className="text-neutral-700 mb-2">
                  {item.storageAvailability ? "Yes" : "No"}
                </p>
              </td>
            </tr>
          )}
          <tr>
            <td className="text-lg text-neutral-700 font-semibold">Material</td>
            <td>
              <p className="text-neutral-700 mb-2">
                Frame Material: {item.material.frameMaterial}
              </p>
              <p className="text-neutral-700">
                Surface Material: {item.material.surfaceFinish}
              </p>
            </td>
          </tr>
          <tr>
            <td className="text-lg text-neutral-700 font-semibold">Color</td>
            <td>
              <p className="text-neutral-700 mb-2">{item.color}</p>
            </td>
          </tr>
          <tr>
            <td className="text-lg text-neutral-700 font-semibold">Color</td>
            <td>
              <p className="text-neutral-700 mb-2">{item.color}</p>
            </td>
          </tr>
          {item.brand && (
            <tr>
              <td className="text-lg text-neutral-700 font-semibold">Brand</td>
              <td>
                <p className="text-neutral-700 mb-2">{item.brand}</p>
              </td>
            </tr>
          )}
          <tr>
            <td className="text-lg text-neutral-700 font-semibold">Warranty</td>
            <td>
              <p className="text-neutral-700 mb-2">{item.warranty} months</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdditionalInformation;
