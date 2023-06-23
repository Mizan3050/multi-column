import { Component } from '@angular/core';

@Component({
  selector: 'app-table-tree',
  templateUrl: './table-tree.component.html',
  styleUrls: ['./table-tree.component.scss']
})
export class TableTreeComponent {
  data = [
    {
      company: "ABC Corp",
      contact: "John Smith",
      country: "United States"
    },
    {
      company: "XYZ Ltd",
      contact: "Jane Doe",
      country: "Canada"
    },
    {
      company: "Example Co",
      contact: "Michael Johnson",
      country: "United Kingdom"
    },
    {
      company: "Acme Inc",
      contact: "Emily Brown",
      country: "Australia"
    },
    {
      company: "Global Enterprises",
      contact: "Robert Wilson",
      country: "Germany"
    },
    {
      company: "Innovative Solutions",
      contact: "Sophia Lee",
      country: "South Korea"
    },
    {
      company: "Tech Startups",
      contact: "Daniel Garcia",
      country: "Spain"
    },
    {
      company: "Eco Products",
      contact: "Isabella Martinez",
      country: "Brazil"
    },
    {
      company: "Prime Industries",
      contact: "Liam Johnson",
      country: "India"
    },
    {
      company: "Dynamic Innovations",
      contact: "Olivia Thompson",
      country: "France"
    }
  ];

  table = [this.data[0]]

  nestedTable = [
    {
      name: 'Tradexa',
      details: {
        contact: 'Kulbhushan',
        country: 'India'
      },
      isSubDetail: true,
      subDetail: {
        name: 'Pune',
        details: {
          contact: 'Nur',
          country: 'Brazil'
        },
        isSubDetail: true,
        subDetail: {
          name: 'KP',
          details: {
            contact: 'Saif',
            country: 'UK'
          },
          isSubDetail: false,
        }
      }
    }
  ];

  chartofaccounts = [
    {
      "account_id": "1290818000000000462",
      "account_name": "Accounts Receivable",
      "account_code": "",
      "account_type": "accounts_receivable",
      "account_type_formatted": "Accounts Receivable",
      "description": "The money that customers owe you becomes the accounts receivable. A good example of this is a payment expected from an invoice sent to your customer.",
      "is_user_created": false,
      "is_system_account": true,
      "is_active": true,
      "can_show_in_ze": false,
      "parent_account_id": "",
      "parent_account_name": "",
      "depth": 0,
      "has_attachment": false,
      "is_child_present": false,
      "child_count": "",
      "documents": [],
      "created_time": "2023-04-19T14:33:08+0530",
      "is_standalone_account": false,
      "is_ze_paid_through_account": false,
      "last_modified_time": "2023-04-19T14:33:09+0530"
    },
    {
      "account_id": "1290818000000000468",
      "account_name": "Advance Tax",
      "account_code": "",
      "account_type": "other_current_asset",
      "account_type_formatted": "Other Current Asset",
      "description": "Any tax which is paid in advance is recorded into the advance tax account. This advance tax payment could be a quarterly, half yearly or yearly payment.",
      "is_user_created": false,
      "is_system_account": true,
      "is_active": true,
      "can_show_in_ze": false,
      "parent_account_id": "",
      "parent_account_name": "",
      "depth": 0,
      "has_attachment": false,
      "is_child_present": false,
      "child_count": "",
      "documents": [],
      "created_time": "2023-04-19T14:33:08+0530",
      "is_standalone_account": false,
      "is_ze_paid_through_account": false,
      "last_modified_time": "2023-04-19T14:33:09+0530"
    },
    {
      "account_id": "1290818000000000570",
      "account_name": "Employee Advance",
      "account_code": "",
      "account_type": "other_current_asset",
      "account_type_formatted": "Other Current Asset",
      "description": "Money paid out to an employee in advance can be tracked here till it's repaid or shown to be spent for company purposes.",
      "is_user_created": false,
      "is_system_account": true,
      "is_active": true,
      "can_show_in_ze": false,
      "parent_account_id": "",
      "parent_account_name": "",
      "depth": 0,
      "has_attachment": false,
      "is_child_present": false,
      "child_count": "",
      "documents": [],
      "created_time": "2023-04-19T14:33:08+0530",
      "is_standalone_account": false,
      "is_ze_paid_through_account": false,
      "last_modified_time": "2023-04-19T14:33:09+0530"
    },
    {
      "account_id": "1290818000000000465",
      "account_name": "Furniture and Equipment",
      "account_code": "",
      "account_type": "fixed_asset",
      "account_type_formatted": "Fixed Asset",
      "description": "Purchases of furniture and equipment for your office that can be used for a long period of time usually exceeding one year can be tracked with this account.",
      "is_user_created": false,
      "is_system_account": false,
      "is_active": true,
      "can_show_in_ze": false,
      "parent_account_id": "",
      "parent_account_name": "",
      "depth": 0,
      "has_attachment": false,
      "is_child_present": false,
      "child_count": "",
      "documents": [],
      "created_time": "2023-04-19T14:33:08+0530",
      "is_standalone_account": false,
      "is_ze_paid_through_account": false,
      "last_modified_time": "2023-04-19T14:33:09+0530"
    },
    {
      "account_id": "1290818000000018024",
      "account_name": "Goods In Transit",
      "account_code": "",
      "account_type": "other_current_asset",
      "account_type_formatted": "Other Current Asset",
      "description": "An account which tracks your In Transit goods value.",
      "is_user_created": true,
      "is_system_account": true,
      "is_active": true,
      "can_show_in_ze": false,
      "parent_account_id": "",
      "parent_account_name": "",
      "depth": 0,
      "has_attachment": false,
      "is_child_present": false,
      "child_count": "",
      "documents": [],
      "created_time": "2023-04-19T23:44:58+0530",
      "is_standalone_account": false,
      "is_ze_paid_through_account": false,
      "last_modified_time": "2023-04-19T23:44:58+0530"
    },
    {
      "account_id": "1290818000000000626",
      "account_name": "Inventory Asset",
      "account_code": "",
      "account_type": "stock",
      "account_type_formatted": "Stock",
      "description": "An account which tracks the value of goods in your inventory.",
      "is_user_created": false,
      "is_system_account": true,
      "is_active": true,
      "can_show_in_ze": false,
      "parent_account_id": "",
      "parent_account_name": "",
      "depth": 0,
      "has_attachment": false,
      "is_child_present": false,
      "child_count": "",
      "documents": [],
      "created_time": "2023-04-19T14:33:08+0530",
      "is_standalone_account": false,
      "is_ze_paid_through_account": false,
      "last_modified_time": "2023-04-19T14:33:09+0530"
    },
    {
      "account_id": "1290818000000022063",
      "account_name": "noor",
      "account_code": "",
      "account_type": "bank",
      "account_type_formatted": "Bank",
      "description": "",
      "is_user_created": true,
      "is_system_account": false,
      "is_active": true,
      "can_show_in_ze": false,
      "parent_account_id": "",
      "parent_account_name": "",
      "depth": 0,
      "has_attachment": false,
      "is_child_present": false,
      "child_count": "",
      "documents": [],
      "created_time": "2023-04-20T15:07:57+0530",
      "is_standalone_account": false,
      "is_ze_paid_through_account": true,
      "last_modified_time": "2023-04-20T15:07:57+0530"
    },
    {
      "account_id": "1290818000000000459",
      "account_name": "Petty Cash",
      "account_code": "",
      "account_type": "cash",
      "account_type_formatted": "Cash",
      "description": "It is a small amount of cash that is used to pay your minor or casual expenses rather than writing a check.",
      "is_user_created": false,
      "is_system_account": true,
      "is_active": true,
      "can_show_in_ze": false,
      "parent_account_id": "",
      "parent_account_name": "",
      "depth": 0,
      "has_attachment": false,
      "is_child_present": true,
      "child_count": 1,
      "documents": [],
      "created_time": "2023-04-19T14:33:08+0530",
      "is_standalone_account": false,
      "is_ze_paid_through_account": true,
      "last_modified_time": "2023-04-19T14:33:09+0530"
    },
    {
      "account_id": "1290818000000071001",
      "account_name": "daily cash",
      "account_code": "123",
      "account_type": "cash",
      "account_type_formatted": "Cash",
      "description": "",
      "is_user_created": true,
      "is_system_account": false,
      "is_active": true,
      "can_show_in_ze": false,
      "parent_account_id": "1290818000000000459",
      "parent_account_name": "Petty Cash",
      "depth": 1,
      "has_attachment": false,
      "is_child_present": true,
      "child_count": 1,
      "documents": [],
      "created_time": "2023-06-15T20:22:10+0530",
      "is_standalone_account": false,
      "is_ze_paid_through_account": true,
      "last_modified_time": "2023-06-15T20:22:10+0530"
    },
    {
      "account_id": "1290818000000074013",
      "account_name": "dc d",
      "account_code": "",
      "account_type": "cash",
      "account_type_formatted": "Cash",
      "description": "",
      "is_user_created": true,
      "is_system_account": false,
      "is_active": true,
      "can_show_in_ze": false,
      "parent_account_id": "1290818000000071001",
      "parent_account_name": "daily cash",
      "depth": 2,
      "has_attachment": false,
      "is_child_present": true,
      "child_count": 1,
      "documents": [],
      "created_time": "2023-06-18T14:55:26+0530",
      "is_standalone_account": false,
      "is_ze_paid_through_account": true,
      "last_modified_time": "2023-06-18T14:55:26+0530"
    },
    {
      "account_id": "1290818000000074017",
      "account_name": "cdc",
      "account_code": "",
      "account_type": "cash",
      "account_type_formatted": "Cash",
      "description": "",
      "is_user_created": true,
      "is_system_account": false,
      "is_active": true,
      "can_show_in_ze": false,
      "parent_account_id": "1290818000000074013",
      "parent_account_name": "dc d",
      "depth": 3,
      "has_attachment": false,
      "is_child_present": false,
      "child_count": "",
      "documents": [],
      "created_time": "2023-06-18T14:55:43+0530",
      "is_standalone_account": false,
      "is_ze_paid_through_account": true,
      "last_modified_time": "2023-06-18T14:55:43+0530"
    },
    {
      "account_id": "1290818000000015018",
      "account_name": "Prepaid Expenses",
      "account_code": "",
      "account_type": "other_current_asset",
      "account_type_formatted": "Other Current Asset",
      "description": "An asset account that reports amounts paid in advance while purchasing goods or services from a vendor.",
      "is_user_created": true,
      "is_system_account": false,
      "is_active": true,
      "can_show_in_ze": false,
      "parent_account_id": "",
      "parent_account_name": "",
      "depth": 0,
      "has_attachment": false,
      "is_child_present": false,
      "child_count": "",
      "documents": [],
      "created_time": "2023-04-19T14:33:08+0530",
      "is_standalone_account": false,
      "is_ze_paid_through_account": false,
      "last_modified_time": "2023-04-19T14:33:09+0530"
    },
    {
      "account_id": "1290818000000015238",
      "account_name": "Sales to Customers (Cash)",
      "account_code": "",
      "account_type": "other_current_asset",
      "account_type_formatted": "Other Current Asset",
      "description": "",
      "is_user_created": true,
      "is_system_account": true,
      "is_active": true,
      "can_show_in_ze": false,
      "parent_account_id": "",
      "parent_account_name": "",
      "depth": 0,
      "has_attachment": false,
      "is_child_present": false,
      "child_count": "",
      "documents": [],
      "created_time": "2023-04-19T14:33:10+0530",
      "is_standalone_account": false,
      "is_ze_paid_through_account": false,
      "last_modified_time": "2023-04-19T14:33:10+0530"
    },
    {
      "account_id": "1290818000000015022",
      "account_name": "TDS Receivable",
      "account_code": "",
      "account_type": "other_current_asset",
      "account_type_formatted": "Other Current Asset",
      "description": "",
      "is_user_created": true,
      "is_system_account": false,
      "is_active": true,
      "can_show_in_ze": false,
      "parent_account_id": "",
      "parent_account_name": "",
      "depth": 0,
      "has_attachment": false,
      "is_child_present": false,
      "child_count": "",
      "documents": [],
      "created_time": "2023-04-19T14:33:08+0530",
      "is_standalone_account": false,
      "is_ze_paid_through_account": false,
      "last_modified_time": "2023-04-19T14:33:09+0530"
    },
    {
      "account_id": "1290818000000000456",
      "account_name": "Undeposited Funds",
      "account_code": "",
      "account_type": "cash",
      "account_type_formatted": "Cash",
      "description": "Record funds received by your company yet to be deposited in a bank as undeposited funds and group them as a current asset in your balance sheet.",
      "is_user_created": false,
      "is_system_account": true,
      "is_active": true,
      "can_show_in_ze": false,
      "parent_account_id": "",
      "parent_account_name": "",
      "depth": 0,
      "has_attachment": false,
      "is_child_present": false,
      "child_count": "",
      "documents": [],
      "created_time": "2023-04-19T14:33:08+0530",
      "is_standalone_account": false,
      "is_ze_paid_through_account": true,
      "last_modified_time": "2023-04-19T14:33:09+0530"
    }
  ]

}
