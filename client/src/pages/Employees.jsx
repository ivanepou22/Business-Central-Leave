import React, { useEffect, useState } from 'react'
import { getEmployees } from '../services/employeeService';
import Header from '../components/Header';

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      const { data } = await getEmployees();
      setEmployees(data.value);
    }
    fetchEmployees();
  }, [])
  return (
    <div>
      <div className="page">
      <Header />
        <div className="page-wrapper">
          <div className="container-xl">
            <div className="page-header d-print-none">
              <div className="row align-items-center">
                <div className="col">
                  <h2 className="page-title">
                    Employees
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="page-body">
            <div className="container-xl">
              <div className="row row-cards">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Invoices</h3>
                    </div>
                    <div className="card-body border-bottom py-3">
                      <div className="d-flex">
                        <div className="text-muted">
                          Show
                          <div className="mx-2 d-inline-block">
                            <input type="text" className="form-control form-control-sm" value="8" size="3" aria-label="Invoices count" />
                          </div>
                          entries
                        </div>
                        <div className="ms-auto text-muted">
                          Search:
                          <div className="ms-2 d-inline-block">
                            <input type="text" className="form-control form-control-sm" aria-label="Search invoice" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table card-table table-vcenter text-nowrap">
                        <thead>
                          <tr>
                            <th className="w-1">
                              <input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all invoices"/>

                              </th>
                            <th className="w-1">No.
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-sm text-dark icon-thick" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="6 15 12 9 18 15" /></svg>
                            </th>
                            <th>Invoice Subject</th>
                            <th>Client</th>
                            <th>VAT No.</th>
                            <th>Created</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                            <td><span className="text-muted">001401</span></td>
                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Design Works</a></td>
                            <td>
                              <span className="flag flag-country-us"></span>
                              Carlson Limited
                            </td>
                            <td>
                              87956621
                            </td>
                            <td>
                              15 Dec 2017
                            </td>
                            <td>
                              <span className="badge bg-success me-1"></span> Paid
                            </td>
                            <td>$887</td>
                            <td className="text-end">
                              <span className="dropdown">
                                <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                </div>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="card-footer d-flex align-items-center">
                      <p className="m-0 text-muted">Showing <span>1</span> to <span>8</span> of <span>16</span> entries</p>
                      <ul className="pagination m-0 ms-auto">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabindex="-1" aria-disabled="true">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="15 6 9 12 15 18" /></svg>
                            prev
                          </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="9 6 15 12 9 18" /></svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer footer-transparent d-print-none">
            <div className="container-xl">
              <div className="row text-center align-items-center flex-row-reverse">
                <div className="col-lg-auto ms-lg-auto">
                  <ul className="list-inline list-inline-dots mb-0">
                    <li className="list-inline-item"><a href="./docs/index.html" className="link-secondary">Documentation</a></li>
                    <li className="list-inline-item"><a href="./license.html" className="link-secondary">License</a></li>
                    <li className="list-inline-item"><a href="https://github.com/tabler/tabler" target="_blank" className="link-secondary" rel="noopener">Source code</a></li>
                    <li className="list-inline-item">
                      <a href="https://github.com/sponsors/codecalm" target="_blank" className="link-secondary" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon text-pink icon-filled icon-inline" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                        Sponsor
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                  <ul className="list-inline list-inline-dots mb-0">
                    <li className="list-inline-item">
                      Copyright &copy; 2022
                      <a href="." className="link-secondary">Tabler</a>.
                      All rights reserved.
                    </li>
                    <li className="list-inline-item">
                      <a href="./changelog.html" className="link-secondary" rel="noopener">
                        v1.0.0-beta8
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Employees