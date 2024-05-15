package site.sugarnest.backend.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import site.sugarnest.backend.dto.ApiDto;
import site.sugarnest.backend.dto.request.PermissionRequest;
import site.sugarnest.backend.dto.request.RoleRequest;
import site.sugarnest.backend.dto.response.PermissionResponse;
import site.sugarnest.backend.dto.response.RoleResponse;
import site.sugarnest.backend.service.account.RoleService;

import java.util.List;

@RestController
@RequestMapping("/roles")
@AllArgsConstructor
public class RoleController {
    RoleService roleService;

    @PostMapping
    ApiDto<RoleResponse> createRole(@RequestBody RoleRequest request) {
        return ApiDto.<RoleResponse>builder()
                .message("Permission created!")
                .result(roleService.create(request))
                .build();
    }

    @GetMapping
    ApiDto<List<RoleResponse>> getAllRole() {
        return ApiDto.<List<RoleResponse>>builder()
                .message("All permissions!")
                .result(roleService.getAll())
                .build();
    }

    @DeleteMapping("/{name}")
    ApiDto<Void> deletePermission(@PathVariable String name) {
        roleService.delete(name);
        return ApiDto.<Void>builder()
                .message("Permission deleted!")
                .build();
    }
}
