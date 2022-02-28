import React from "react";
import "./PastOffers.css";
import Table from "react-bootstrap/Table";

export default function IncomingInquiries() {
    return (

        <div className="card incomingInquiriesCard1">
            <div className="row ">
                &emsp;
                &emsp;

                <div className="col-5">
                    <h6 class="card-title incomingBar1 "><h2>Past Offers</h2> </h6>
                </div>
                <div className="col-1"> </div>
                &emsp;
                <div className="col-5 mt-3 ">
                    <div class="dropdown incomingBar1float-end">
                        <button class="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="card-body text-center">
                {/* Table start */}

                <Table hover className="border">
                    <thead>
                        <tr className="incomingBar2">
                            <th>Job Title</th>
                            <th>Estimator Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Job Title one</td>
                            <td>Kashif</td>
                            <td>Testing address somewhere at rwp</td>
                            <td className="Action" >Quote</td>
                        </tr>
                        <tr>
                            <td>Job Title one</td>
                            <td>Kashif</td>
                            <td>Testing address somewhere at rwp</td>
                            <td className="Action" >Quote</td>
                        </tr>
                        <tr>
                            <td>Job Title one</td>
                            <td>Kashif</td>
                            <td>Testing address somewhere at rwp</td>
                            <td className="Action" >Quote</td>
                        </tr>
                        <tr>
                            <td>Job Title one</td>
                            <td>Kashif</td>
                            <td>Testing address somewhere at rwp</td>
                            <td className="Action" >Quote</td>
                        </tr>
                        <tr>
                            <td>Job Title one</td>
                            <td>Kashif</td>
                            <td>Testing address somewhere at rwp</td>
                            <td className="Action" >Quote</td>
                        </tr>
                    </tbody>
                </Table>

                {/* Table end */}
            </div>
        </div>

    );
}
