Feature: Check functionality to add appointments

    Scenario: Add new appointments
        Given I have load the page new appointments
        When I fill all inputs and do click on Agregar Nueva Cita
        Then the system add the new appointment on the list
