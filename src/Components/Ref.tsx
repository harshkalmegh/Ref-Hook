import { useRef, useEffect } from "react";

const Ref = () => {
  const searchRef = useRef<any>({});

  const _handleSubmit = () => {
    console.log({ anotherSearch: searchRef.current.value });

    setTimeout(() => {
      searchRef.current.value = "";
      
    });
  };

  useEffect(() => {
    searchRef?.current?.focus();
  }, []);

  useEffect(() => {
    console.log(searchRef.current);
  }, [searchRef.current.value]);

  return (
    <>
      <p>Search Here</p>
      <input
        type="text"
        maxLength={1}
        style={{ width: "15px" }}
        
        ref={searchRef}
      />
      <input
        type="text"
        maxLength={1}
        style={{ width: "15px" }}
        ref={searchRef}
      />
      <input
        type="text"
        maxLength={1}
        style={{ width: "15px" }}
        ref={searchRef}
      />
      <input
        type="text"
        maxLength={1}
        style={{ width: "15px" }}
        ref={searchRef}
      />
      <br />
      <button onClick={_handleSubmit}>Save Details</button>
    </>
  );
};

export default Ref;
