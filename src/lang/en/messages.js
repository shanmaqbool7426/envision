export const SIGNIN= {
  req:"Required",
    email: {
      req: "Email is required",
      reqvalid: "A valid email is required",
      invalid: "Please provide valid email address",
    },
    password: {
      req: "Password is required",
      reqvalid: "Password is required",
      invalid: (<ul>
                <li>* Minimum 8 characters</li>
                <li>
                  * Include At Least : 1 Capital Letter, 1 Lowercase, 1 Symbol
                  and 1 Numeric Digit
                </li>
              </ul>
              )
    },
    phone: {
      req: "Phone No. is required",
    },
}