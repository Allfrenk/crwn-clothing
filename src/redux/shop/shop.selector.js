import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collection) => collection[collectionUrlParam]
    // (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
  )
);

// export const selectCollection = (collectionUrlParam) =>
//   createSelector([selectCollections], (collections) => {
//     return collections.find((collection) => {
//       return collection.routeName === collectionUrlParam;
//     });
//   });
