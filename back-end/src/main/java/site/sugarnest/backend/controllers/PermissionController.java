package site.sugarnest.backend.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import site.sugarnest.backend.dto.ApiDto;
import site.sugarnest.backend.dto.request.PermissionRequest;
import site.sugarnest.backend.dto.response.PermissionResponse;
import site.sugarnest.backend.service.account.PermissionService;

import java.util.List;

@RestController
@RequestMapping("/permissions")
@AllArgsConstructor
public class PermissionController {
    PermissionService permissionService;

    @PostMapping
    ApiDto<PermissionResponse> createPermission(@RequestBody PermissionRequest request) {
        return ApiDto.<PermissionResponse>builder()
                .message("Permission created!")
                .result(permissionService.create(request))
                .build();
    }

    @GetMapping
    ApiDto<List<PermissionResponse>> getAllPermission() {
        return ApiDto.<List<PermissionResponse>>builder()
                .message("All permissions!")
                .result(permissionService.getAll())
                .build();
    }

    @DeleteMapping("/{name}")
    ApiDto<Void> deletePermission(@PathVariable String name) {
        permissionService.delete(name);
        return ApiDto.<Void>builder()
                .message("Permission deleted!")
                .build();
    }

}
