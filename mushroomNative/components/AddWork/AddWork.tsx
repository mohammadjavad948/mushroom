import React from "react";
import {ScrollView} from "react-native";
import {addWorkStyle} from "../../styles/AddWork";
import AddWorkForm from "./AddWorkForm";
import {FormikHelpers} from "formik";

export default function AddWork(){

    function submit(value: any, helper: FormikHelpers<any>){
        console.log(value)
    }
    
    return (
        <ScrollView style={addWorkStyle.container}>
            <AddWorkForm 
                submit={submit}
                init={{
                    title: "",
                    description: "",
                    groupId: null,
                    dueDate: new Date()
                }}
            />
        </ScrollView>
    )
}