// import { useState } from "react";
// import "./styles.css";

// export default function pageWizard() {
//        const [page, setPage] = useState(1);
//        const [data, setData] = useState({
//               user: {},
//               profile: {},
//               settings: {}
//        });

//        function goNextPage() {
//               if (page === 4) return;
//               setPage((page) => page + 1);
//        }

//        function updateData(type: any, newData: any) {
//               setData((data) => {
//                      return { ...data, [type]: newData };
//               });
//        }

//        function submit() {
//               fetch("/api/form", { method: "POST", body: JSON.stringify(data) });
//        }

//        return (
//               <div className="App">
//                      {/* the progress bar goes here */}
//                      <div>
//                             <progress max="4" value={page} />
//                      </div>

//                      {/* the content goes here */}
//                      <div>
//                             {page === 1 && <OnboardingOne data={data.user} update={updateData} />}
//                             {page === 2 && (
//                                    <OnboardingTwo data={data.profile} update={updateData} />
//                             )}
//                             {page === 3 && (
//                                    <OnboardingThree data={data.settings} update={updateData} />
//                             )}
//                             {page === 4 && <OnboardingFour data={undefined} update={undefined} />}
//                      </div>

//                      {page !== 4 && <button onClick={goNextPage}>Go Next</button>}
//                      {page === 4 && (
//                             <button type="submit" onClick={submit}>
//                                    Submit
//                             </button>
//                      )}
//               </div>
//        );
// }

// function OnboardingOne({ data, update }) {
//        const newData = {};

//        return (
//               <div>
//                      i am page one
//                      <button onClick={() => update("user", newData)}></button>
//               </div>
//        );
// }

// function OnboardingTwo({ data, update }) {
//        return <div>i am page two</div>;
// }

// function OnboardingThree({ data, update }) {
//        return <div>i am page three</div>;
// }

// function OnboardingFour({ data, update }) {
//        return <div>i am page four</div>;
// }
