/* eslint-disable import/prefer-default-export */
export const sections = [
      {
        isVisible: true,
        sectionName: 'passport_details',
        sectionTitle: 'Enter Passport Details',
        components: [
          {
            name: 'passport_number',
            componentType: 'TextInput',
            defaultValue: '',
            isVisible: true,
            placeholder: 'Passport Number',
            required: true,
            type: 'text',
          },
         
    //       {
    //         name: 'citizenship',
    //         componentType: 'CitizenshipSelectBox',
    //         defaultValue: 'USA',
    //         isVisible: true,
    //         placeholder: 'Citizenship',
    //         required: true,
    //         type: 'text',
    //       },
        ],
      },
      {
        isVisible: true,
        sectionName: 'personal_details',
        sectionTitle: 'Enter Personal Details',
        components: [
    //       {
    //         name: 'prefix',
    //         componentType: 'TitleSelectBox',
    //         defaultValue: '',
    //         isVisible: true,
    //         placeholder: 'Title',
    //         required: false,
    //         type: 'text',
    //       },
          {
            name: 'firstname',
            componentType: 'TextInput',
            defaultValue: '',
            isVisible: true,
            placeholder: 'First Name',
            required: true,
            type: 'text',
          },
          {
            name: 'middlename',
            componentType: 'TextInput',
            defaultValue: '',
            isVisible: true,
            placeholder: 'Middle Name',
            required: false,
            type: 'text',
          },
          {
            name: 'lastname',
            componentType: 'TextInput',
            defaultValue: '',
            isVisible: true,
            placeholder: 'Last Name',
            required: true,
            type: 'text',
          },
    //       {
    //         name: 'gender',
    //         componentType: 'GenderSelectBox',
    //         type: 'text',
    //         defaultValue: '',
    //         isVisible: true,
    //         placeholder: 'Gender',
    //         required: true,
    //       },
        
        ],
      },
      {
        isVisible: true,
        sectionName: 'address_details',
        sectionTitle: 'Enter Address Details',
        components: [
          {
            name: 'address',
            componentType: 'TextInput',
            defaultValue: '',
            isVisible: true,
            placeholder: 'Address Line 1',
            required: false,
            type: 'text',
          },
          {
            name: 'address2',
            componentType: 'TextInput',
            defaultValue: '',
            isVisible: true,
            placeholder: 'Address Line 2',
            required: false,
            type: 'text',
          },
          {
            name: 'zip',
            componentType: 'TextInput',
            defaultValue: '',
            isVisible: true,
            placeholder: 'ZIP code',
            required: false,
            type: 'text',
          },
          
        ],
      },
     
    ]
    