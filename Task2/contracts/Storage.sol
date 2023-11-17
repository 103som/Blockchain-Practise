// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract Storage {
    struct Client {
        uint256 balance;
        string name;
        bool allowedToSend;
    }

    mapping (address => Client) public storageMapping;

    // Событие для логирования добавления структуры
    event ClientAdded(address indexed key, uint256 balance, string name, bool allowedToSend);

    // Событие для логирования удаления структуры
    event ClientRemoved(address indexed key);

    function addClient(uint256 balance, string calldata name, bool allowedToSend) external {
        // Создаем экземпляр структуры
        Client memory newStruct = Client(balance, name, allowedToSend);

        // Добавляем структуру в отображение по адресу вызывающего контракта
        storageMapping[msg.sender] = newStruct;

        // Логируем событие
        emit ClientAdded(msg.sender, balance, name, allowedToSend);
    }

    function removeClient() external {
        // Удаляем структуру из отображения по адресу вызывающего контракта
        delete storageMapping[msg.sender];

        // Логируем событие
        emit ClientRemoved(msg.sender);
    }
}