import styled from "styled-components";

export const ProfileMain = styled.main`

    header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .logoDiv {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 40px;

        padding: 45px 0 0 80px;
    }

    .logoDiv svg {
        height: 60px;
        width: 60px;
        padding: 10px;
    
        border-radius: 8px;
        background-color: var(--brand-1);
        color: var(--brand-2);
    }

    .logoDiv img {
        height: 90px;
    }

    .profileDiv{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;

        height: 300px;
        width: 700px;
        margin-top: 30px;

        border-radius: 20px 0 0 20px;
        background-color: var(--grey-5);
    }

    .profileDiv div {
        display: flex;
        flex-direction: row;
        gap: 50px;
    }

    section {
        padding: 20px 100px;
    }

    section h1 {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    section ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;

        margin-top: 50px;
    }

    .petItem{
        display: flex;
        flex-direction: column;
    }

    .petItem .imgDiv {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 220px;
        width: 350px;

        border: 2px solid var(--brand-1);
        border-radius: 8px 8px 0 0;
    }

    .petItem .imgDiv img {
        height: 200px;
        width: 200px;
        object-fit: cover;
        transition: 0.2s;

        border-radius: 50%;
    }

    .petItem .imgDiv img:hover {
        transform: scale(1.05);
    }
    
    .petItem .descriptionDiv {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 350px;
        padding: 20px;

        background-color: var(--brand-1);
        border-radius: 0 0 8px 8px;
    }

    @media (max-width: 762px){
        

        .logoDiv {
            flex-direction: column;
            justify-content: flex-start;
            gap: 20px;

            padding: 40px 0 0 5%;
        }

        .logoDiv img {
            height: 55px;
        }

        .profileDiv{
            justify-content: flex-start;
            align-items: center;
            gap: 30px;

            height: 300px;
            width: 250px;
            margin-top: 30px;
            padding: 20px;

        }

        .profileDiv h1{
            text-align: center;
            line-height: 30px;
        }

        .profileDiv div {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        section {
            padding: 10px 5%;
        }

        section ul{
            flex-direction: column;
            align-items: center;
        }


        .petItem .imgDiv {
            width: 300px;
        }

        .petItem .imgDiv img {
            height: 150px;
        }
        
        .petItem .descriptionDiv {
            width: 300px;
        }
    }
`