export const CustomerService = {
    getData() {
        return [
                {
                    empName: "Holman Suarez",
                    empIdNum: 45,
                    empOdsu: "Administrative and Finance Division",
                    empStatus: "Coterminous",
                    gender: "male",
                    email: "holmansuarez@aquasure.com"
                  },
                  {
                    empName: "Barr Dominguez",
                    empIdNum: 25,
                    empOdsu: "Localization and Institutionalization Division / Regional Committee / Sub-committee",
                    empStatus: "COSW",
                    gender: "male",
                    email: "barrdominguez@aquasure.com"
                  },
                  {
                   empName: "Janine Serrano",
                    empIdNum: 38,
                    empOdsu: "Monitoring and Evaluation Division",
                    empStatus: "Permanent",
                    gender: "female",
                    email: "janineserrano@aquasure.com"
                  },
                  {
                   empName: "Justice Clayton",
                    empIdNum: 14,
                    empOdsu: "Management and Information Systems Unit",
                    empStatus: "Coterminous",
                    gender: "male",
                    email: "justiceclayton@aquasure.com"
                  },
                  {
                   empName: "Casey Giles",
                    empIdNum: 328,
                    empOdsu: "Administrative and Finance Division",
                    empStatus: "Coterminous",
                    gender: "male",
                    email: "caseygiles@aquasure.com"
                  },
                  {
                   empName: "Glenda Rosales",
                    empIdNum: 278,
                    empOdsu: "Administrative and Finance Division",
                    empStatus: "Coterminous",
                    gender: "female",
                    email: "glendarosales@aquasure.com"
                  }
        ];
    },

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    },

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    },

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    },

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    },

    getCustomers(params) {
        const queryParams = params
            ? Object.keys(params)
                  .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                  .join('&')
            : '';

        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then((res) => res.json());
    }
};
