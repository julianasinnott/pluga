import React from "react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen, act, cleanup } from "@testing-library/react";
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';
import userEvent from "@testing-library/user-event";
import { Apps } from '../../components/Apps';
import { appsDataMock } from '../../mocks/appsDataMock';

const apiMock = new MockAdapter(api)

afterEach(() => cleanup())

describe("Apps", () => {
  it("should render Apps component", async () => {
    act(() => {
      apiMock.onGet('/ferramentas_search.json')
      .reply(200, appsDataMock);
    });

    render(<Apps data={appsDataMock} pageSize={12} />);

    const appCard = await screen.findByText(appsDataMock[1].name)

    expect(appCard).toBeInTheDocument()   
  });

  it("should render 12 App Cards", async () => {
    act(() => {
      apiMock.onGet('/ferramentas_search.json')
      .reply(200, appsDataMock);
    });

    render(<Apps data={appsDataMock} pageSize={12} />);

    const appCard = await screen.findByText(appsDataMock[1].name)
    const arrayAppCards = await screen.findAllByRole('img')
    
    expect(appCard).toBeInTheDocument()    
    expect(arrayAppCards).toHaveLength(12)
  });

  it("should show the modal", async () => {
    act(() => {
      apiMock.onGet('/ferramentas_search.json')
      .reply(200, appsDataMock);
    });

    render(<Apps data={appsDataMock} pageSize={12} />);

    const appCard = await screen.findByText(appsDataMock[1].name)
    
    userEvent.click(appCard)
    
    const modalButton = await screen.findByRole('button')
    
    expect(modalButton).toBeInTheDocument()
  })
});