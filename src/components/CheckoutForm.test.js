import React from "react";
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const header = screen.getByText('Checkout Form');
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    //Arrange
    render(<CheckoutForm/>);
    const successText = 'You have ordered some plants! Woo-hoo!';

    //Act
    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);
    
    //Assert
    await waitFor(()=>{
        const successMessage = screen.queryByText(successText);
        expect(successMessage).toBeInTheDocument();
    })
});
