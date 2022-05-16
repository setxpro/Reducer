import styled from 'styled-components';

export const Container = styled.div`

   

    > div {
        
        &:nth-child(1) {
            padding: 2rem 0;
            border-bottom: 1px solid #3333;

            form {
                
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;

                input {
                    padding: .5rem;
                    font-size: 1rem;
                    width: 70%;

                    outline: none;
                    border: 1px solid #3333;
                    border-radius: 1rem;

                    &:focus {
                        box-shadow: 1px 1px 10px #3333;
                    }
                }
                button {
                    border: none;
                    background: #DDD;
                    padding: .5rem;
                    border-radius: 3px;
                    cursor: pointer;

                    &:hover {
                        background: #DDDD;
                    }
                }
            }
        }


        &:nth-child(2) {
            padding: 2rem 0;

            display: flex;
            align-items: center;
            justify-content: center;

            table {
                
                width: 70%;
                position: relative;

                > button {
                    padding: .2rem;
                    border-radius: 3px;
                    cursor: pointer;
                    border: 0;
                    background: #444DDD;
                    color: #FFF;
                    position: absolute;
                    top: -20px;
                    left: 50%;
                }

                tr {
                            &:nth-child(even) {
                                background: #1111;
                            }
                        th {

                            &:first-child {
                                width: 35%;
                            }
                            &:nth-child(2) {
                                width: 45%;
                            }
                            &:last-child {
                                width: 20%;
                            }

                            
                        }
                        td {
                            padding: 5px;

                            &:first-child {
                                text-align: center;
                            }

                            &:nth-child(2) {
                                text-align: center;
                                text-transform: uppercase;
                            }
                            &:last-child {
                                display: flex;
                                align-items: center;
                                justify-content: space-around;
                            }

                             button {

                                padding: .2rem;
                                border-radius: 3px;
                                cursor: pointer;
                                border: 0;
                                background: #f00000;
                                color: #FFF;
                                
                            }
                        
                        }
                    }
                }
            }
    }

   

    
`;
