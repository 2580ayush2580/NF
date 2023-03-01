import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSpecieseData } from "../../redux/actions/global";

const SpeciesCard = (props) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const SpeciesData = useSelector((state) => state?.global?.speciesData);

  const species = SpeciesData?.results;

  useEffect(() => {
    dispatch(GetSpecieseData()).finally((res) => {
      setLoading(false);
    });
  }, []);

  return loading ? null : (
    <div className="fixed-container card w-50 mt-4">
      <div className="flex justify-between align-center font-weight-bold my-3">
        <div>Species</div>
        <div>Total</div>
      </div>
      {species && species?.length > 0
        ? species.map(({ name, people }) => {
            const total = people && people?.length;
            return (
              <div className="flex justify-between align-center my-2">
                <div>{name}</div>
                <div>{total}</div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default SpeciesCard;
