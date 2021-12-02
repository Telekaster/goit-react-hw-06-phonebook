import React from "react";
// import { useSelector } from "react-redux";
import styles from "./ContactList.css";

export default function ContactList({ filter, contacts, deleteContact }) {
  // Redux_____________________________
  // const contacts = useSelector((state) => state.contacts);
  // __________________________________
  return (
    <div className="contacts">
      <ul className="contacts__list">
        {filter === undefined
          ? contacts.map((item) => {
              return (
                <li key={item.key}>
                  {`${item.name}: ${item.number}`}{" "}
                  <button
                    onClick={deleteContact}
                    id={item.key}
                    type="button"
                    className="contacts__list_btn"
                  >
                    Delete
                  </button>{" "}
                </li>
              );
            })
          : contacts
              .filter((item) =>
                item.name.toLowerCase().includes(filter.toLowerCase())
              )
              .map((item) => {
                return (
                  <li key={item.key}>
                    {`${item.name}: ${item.number}`}{" "}
                    <button
                      onClick={deleteContact}
                      type="button"
                      className="contacts__list_btn"
                    >
                      Delete
                    </button>{" "}
                  </li>
                );
              })}
      </ul>
    </div>
  );
}

// export default function ContactList({ filter, contacts, deleteContact }) {
//   return (
//     <div className="contacts">
//       <ul className="contacts__list">
//         {filter === undefined
//           ? contacts.map((item) => {
//               return (
//                 <li key={item.key}>
//                   {`${item.name}: ${item.number}`}{" "}
//                   <button
//                     onClick={deleteContact}
//                     id={item.key}
//                     type="button"
//                     className="contacts__list_btn"
//                   >
//                     Delete
//                   </button>{" "}
//                 </li>
//               );
//             })
//           : contacts
//               .filter((item) =>
//                 item.name.toLowerCase().includes(filter.toLowerCase())
//               )
//               .map((item) => {
//                 return (
//                   <li key={item.key}>
//                     {`${item.name}: ${item.number}`}{" "}
//                     <button
//                       onClick={deleteContact}
//                       type="button"
//                       className="contacts__list_btn"
//                     >
//                       Delete
//                     </button>{" "}
//                   </li>
//                 );
//               })}
//       </ul>
//     </div>
//   );
// }
