package site.sugarnest.backend.mapper;

import org.mapstruct.Mapper;
import site.sugarnest.backend.dto.AccountDto;
import site.sugarnest.backend.entities.AccountEntity;

@Mapper(componentModel = "spring")
public interface IAccountMapper {
    AccountDto mapToAccountDto(AccountEntity accountEntity);
    AccountEntity mapToAccountEntity(AccountDto accountDto);
}
