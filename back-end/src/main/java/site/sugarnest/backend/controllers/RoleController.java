package site.sugarnest.backend.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import site.sugarnest.backend.dto.request.PermissionRequest;
import site.sugarnest.backend.dto.response.ApiResponse;
import site.sugarnest.backend.dto.request.RoleRequest;
import site.sugarnest.backend.dto.response.RoleResponse;
import site.sugarnest.backend.service.Athorization.RoleService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/roles")
@AllArgsConstructor
public class RoleController {
    RoleService roleService;

    @PostMapping
    ApiResponse<RoleResponse> createRole(@RequestBody RoleRequest request) {
        return ApiResponse.<RoleResponse>builder()
                .message("Permission created!")
                .result(roleService.create(request))
                .build();
    }

    @PostMapping("/{name}/permissions")
    ApiResponse<RoleResponse> addPermission(@PathVariable String name, @RequestBody PermissionRequest request) {
        return ApiResponse.<RoleResponse>builder()
                .message("Permission added!")
                .result(roleService.addPermission(name, request))
                .build();
    }
    @GetMapping
    ApiResponse<List<RoleResponse>> getAllRole() {
        return ApiResponse.<List<RoleResponse>>builder()
                .message("All permissions!")
                .result(roleService.getAll())
                .build();
    }

    @DeleteMapping("/{name}")
    ApiResponse<Void> deleteRole(@PathVariable String name) {
        roleService.delete(name);
        return ApiResponse.<Void>builder()
                .message("Permission deleted!")
                .build();
    }

    @DeleteMapping("/{name}/permissions/{permissionName}")
    ApiResponse<RoleResponse> deletePermission(@PathVariable String name, @PathVariable String permissionName) {
        return ApiResponse.<RoleResponse>builder()
                .message("Permission deleted!")
                .result(roleService.deletePermission(name, permissionName))
                .build();
    }

}
