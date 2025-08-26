export interface FilterData {
  id: number;
  label: string;
  key: string;
  fields: {
    key: string;
    name: string;
    type: string;
    placeholder: string;
  }[];
}

export const filterData: FilterData[] = [
  {
    id: 1,
    label: "Availability",
    key: "availability",
    fields: [
      {
        key: "inStock",
        name: "availability",
        type: "checkbox",
        placeholder: "In stock"
      },
      {
        key: "outOfStock",
        name: "availability",
        type: "checkbox",
        placeholder: "Out of stock"
      },
      {
        key: "upcoming",
        name: "availability",
        type: "checkbox",
        placeholder: "Upcoming"
      }
    ]
  },
  {
    id: 2,
    key: "categories",
    label: "Categories",
    fields: [
      {
        key: "chair",
        name: "categories",
        type: "checkbox",
        placeholder: "Chair"
      },
      {
        key: "sofa",
        name: "categories",
        type: "checkbox",
        placeholder: "Sofa"
      },
      {
        key: "table",
        name: "categories",
        type: "checkbox",
        placeholder: "Table"
      },
      {
        key: "bed",
        name: "categories",
        type: "checkbox",
        placeholder: "Bed"
      },
      {
        key: "cabinet",
        name: "categories",
        type: "checkbox",
        placeholder: "Cabinet"
      },
      {
        key: "shelf",
        name: "categories",
        type: "checkbox",
        placeholder: "Shelf"
      }
    ]
  },
  {
    id: 3,
    label: "Size",
    key: "size",
    fields: [
      {
        key: "small",
        name: "size",
        type: "checkbox",
        placeholder: "Small"
      },
      {
        key: "medium",
        name: "size",
        type: "checkbox",
        placeholder: "Medium"
      },
      {
        key: "large",
        name: "size",
        type: "checkbox",
        placeholder: "Large"
      }
    ]
  }
];
