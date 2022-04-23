export const selectData:(data:any) => {options:string[]; name:string; title:string}[] = ({
  optionsCountries=[],
}: any) => [
  {
    options: optionsCountries,
    name: "country",
    title: "Country",
  },
];
